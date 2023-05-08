import {useState} from 'react';
import axios from 'axios';


const InsertionCategory=()=>{
    const[values,setValues]=useState(
        {
            nomcategorie:''
        }
    );

    const handleSubmit=(event)=>{
      event.preventDefault();

      //encovoye
            axios.get('/categorie/add',{params: values})
                .then(response=>{
                    console.log(response.data);
                })
                .catch(error=>{
                    console.error(error);
                })
    };
    const handleChange = (event)=>{
        const {name,value}=event.target;
        setValues({ ...values,[name]:value});

    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="nomcategorie" onChange={handleChange}/>

            <button type={"submit"}>Valider</button>

        </form>




    );




}
export default InsertionCategory;
