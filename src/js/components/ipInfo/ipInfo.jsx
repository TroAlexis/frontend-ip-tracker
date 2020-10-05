import React from 'react';
import PropTypes from 'prop-types';

import './ipInfo.module';


const IpInfo = ({ipData, className}) => {
  const placeholder = '--------'

  const ip = ipData.ip || placeholder;
  const isp = ipData.isp || placeholder;
  const city = ipData.location && ipData.location.city || placeholder;
  const region = ipData.location && ipData.location.region || placeholder;
  const timezone = ipData.location && ipData.location.timezone || placeholder;
  const postalCode = ipData.location && ipData.location.postalCode || placeholder;

  const blockNames = ['ip address', 'location', 'timezone', 'isp'];
  const blockData = [ ip, [city, region].join(', '), timezone, isp ]
  const blocks = []

  blockNames.forEach((name, index) => {
    blocks.push({
      name: name,
      data: blockData[index]
    })
  });

  return pug`
      .ip-info(className=className)
        .wrapper
          each block in blocks
            .block(key=block.name + new Date().getTime())
              h2.heading=block.name

              span.data=block.data

              if block.name === 'location'
                span.data=postalCode
  `;
}

IpInfo.propTypes = {
  ipData: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

export default IpInfo;
