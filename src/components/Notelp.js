import './CardContent.css';

const Notelp = ({dataUser, setDataUser}) => {

    const handleChange = (e) => {
        e.preventDefault();
        setDataUser((data) => ({
            ...data,
            [e.target.id]: e.target.value
        }));
    };

    return ( 
        <div className="card-content p-4 " id='Notelp'>
            <div className="row mt-n2">
                <p>No. Whatsapp</p>
            </div>

            <div className="row ">
                <input type="number" className='input my-n2' id='noTelp' placeholder='08xx-xxxx-xxxx' required value={dataUser.noTelp} onChange={handleChange}/>
            </div>

            <div className="row">
                <p className='fw-light pt-3' id='info'>Bukti pembayaran atas pembelian anda akan kami kirimkan ke Whatsapp anda.</p>
            </div>
        </div>
     );
}
 
export default Notelp;