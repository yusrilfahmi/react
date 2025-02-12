import { useNavigate } from 'react-router-dom';
import EditProfileCSS from './EditProfile.module.css'
import logo from './assets/gray.png';
import { FaUser, FaLock, FaCamera } from "react-icons/fa";

function EditProfile() {
    const navigate = useNavigate()
    return (
        <div className={EditProfileCSS.wrapper}>
            <ul className={EditProfileCSS.close}>

                <li>
                    <button onClick={() => navigate('/SignUp')}><h2>X</h2></button>
                </li>
                <li><h2>Edit Profile</h2></li>
            </ul>
            <img src={logo} alt="Logo" className={EditProfileCSS.img} />
            <FaCamera className={EditProfileCSS.icon} />
            <h3>Nama</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='nama' ></input>
            </div>
            <h3>Tanggal lahir</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='ttl'></input>
            </div>
            <h3>Lokasi</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='lokasi'></input>
            </div>
            <h3>Pekerjaan</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='pekerjaan'></input>
            </div>
            <h3>Hobi</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='hobi'></input>
            </div>

            <button className={EditProfileCSS.btn} onClick={() => navigate('/RekomendasiTeman')} >Simpan</button>
        </div>
    )
}

export default EditProfile