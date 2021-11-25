import React from "react"
import styled from "styled-components"

const SvgTruckIcon = styled.div`
  svg path{
    fill: var(--color-green);
    width: 25px;
    height: 25px;
  }
`

export const TruckIcon = () => {
  return (
    <SvgTruckIcon>
      <svg className="ui-pdp-icon ui-pdp-icon--fast-truck ui-pdp-color--GREEN" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >

        <path fillRule="nonzero" d="M10.587 14.805H7.01a2.452 2.452 0 1 1-4.452-1.937l-1.56-.003.002-1.2 3.6.008v.025h.048c1.167 0 2.143.815 2.39 1.907h3.52a2.455 2.455 0 0 1 1.836-1.844l2.423-6.352a.6.6 0 0 0-.56-.814H4.6v-1.2h9.658a1.8 1.8 0 0 1 1.697 2.4h1.677l1.409 4.225-2.027 4.787-1.701-.007a2.452 2.452 0 0 1-4.726.005zm4.751-1.205l.883.004 1.538-3.634-.991-2.975h-1.27l-1.835 4.809c.834.253 1.48.939 1.675 1.796zM7 5.79v1.2H1v-1.2h6zM4.6 8.222v1.2H2.2v-1.2h2.4zm.049 7.178a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502zm8.3 0a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502z" >
        </path>
      </svg>
    </SvgTruckIcon>
  )
}
