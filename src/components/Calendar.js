import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Calendario del servicio social</h1>
          <h3>Semestre Febrero - Mayo 2020</h3>
        </div>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FMonterrey&amp;src=YWxpY2lhY2lzbmVyb3NtQGdtYWlsLmNvbQ&amp;src=b2EwNnFqcW5sczlnMXFpdXV0OW4yM21kbG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=NWRpcGkxczlubTloNGlibG9wbnQwZWFxZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;color=%23C0CA33&amp;color=%23F09300&amp;showNav=1&amp;showPrint=0&amp;title=Wit-code"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    );
  }
}

export default Calendar;
