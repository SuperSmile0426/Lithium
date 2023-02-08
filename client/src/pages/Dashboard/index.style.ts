// import mui module
import styled from '@emotion/styled';

export const DashboardPageStyle = styled('div')(({ theme }: any) => {
  return {

    ".logout-text": {
      textAlign: "right",
      cursor: "pointer",

      ":hover": {
        color: "blue"
      },

      ":active": {
        color: "red"
      }
    }
  };
});