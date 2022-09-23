import React from 'react';
import axios from "axios";
import { apiBaseUrl } from './constants';
import { setAreaList, setSpectrum, useStateValue } from './state/index';
import { Area, Spectra } from './types';
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Chart from './components/Chart';

function App() {
  const [{ areas, spectrum }, dispatch] = useStateValue();
  const [areaId, setAreaId] = React.useState<string>('1');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: areaListFromApi } = await axios.get<Area[]>(
          `${apiBaseUrl}/areas`
        );
        dispatch(setAreaList(areaListFromApi));

        areaListFromApi.forEach(async (area) => {
          const { data: spectrumFromApi } = await axios.get<Spectra[]>(
            `${apiBaseUrl}/spectrum/${area.id}`
          );
          dispatch(setSpectrum(area.id, spectrumFromApi));
        });
      } catch (e) {
        console.error(e);
      }
    };
    void fetchData();
  }, [dispatch]);

  if (Object.keys(areas).length === 0)
    return <>Loading</>;

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={areaId}>
          <Box>
            <TabList onChange={(e, id: string) => setAreaId(id)} centered>
            {Object.keys(areas).map(id =>
              <Tab label={areas[Number(id)].name} key={id} value={id} />
            )}
            </TabList>
          </Box>
          {Object.keys(areas).map(id =>
            <TabPanel key={id} value={id}>
              <Chart area={areas[Number(id)]} spectrum={spectrum[Number(id)]} />
            </TabPanel>
          )}
        </TabContext>
      </Box>
    </div>
  );
}

export default App;
