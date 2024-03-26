const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >

        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
            <span>
                जय श्री राम 🙏🚩
            </span>
        </p>
        
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Built With love by
          <span style={{color: "orange"}}>
            {" "} Roushan Kumar
          </span>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;