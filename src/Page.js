import QRCode from "react-qr-code";
const Page = () => {
  return (
    <>
      <div style={{ background: 'white', padding: '16px' }}>
          <QRCode value="Problems Syncing. Please Contact Support!" />
      </div>
    </>
  );
};

export default Page;
