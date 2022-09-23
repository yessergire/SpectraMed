import React from 'react';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory';
import { Area, Spectra } from '../types';

const Chart: React.FC<{ area: Area, spectrum: Spectra[] }> = ({ area, spectrum }) => {
  const [domainStart, domainEnd] = area.frequencies;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: '100vh' }}>
    <VictoryChart theme={VictoryTheme.material} style={{ parent: { maxHeight: '90%' } }}>
      <VictoryAxis
        width={400}
        height={400}
        domain={[domainStart, domainEnd]}
        theme={VictoryTheme.material}
        standalone={false}
      />
      <VictoryLine data={spectrum} />
    </VictoryChart>
    </div>
  );
};

export default Chart;