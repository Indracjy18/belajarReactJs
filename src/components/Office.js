import NamaKaryawan from "./Karyawan";

function Office(props) {
  return (
    <>
      <h2 className="header">{props.nama}</h2>
      <div className="username-log">
        <label htmlFor="username">Masukan username : </label>
        <input type="text" />
      </div>
      <div className="password-log">
        <label htmlFor="password">Masukan password : </label>
        <input type="text" />
      </div>
    </>
  );
}

export default Office;
