import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from './actionCreator'

export default function Forms(){

    const storeObj=useSelector((store)=>store)
    console.log("store obj is",storeObj)
    const dispatch=useDispatch();
    const {empDetails}=bindActionCreators(actionCreators,dispatch)

   let [formState,setformState]=useState({
      associateName:'',
      associateId:'',
      projectId:'',
      profile:'',
      comments:''
   
      })
   

   let [skills, setSkills] = useState([
      { name: "HTML,CSS3,JS", value: false },
      { name: "SASS", value: false },
      { name: "ES5,ES6,ES7...", value: false },
      { name: "Bootstrap 4", value: false },
      { name: "Angular 8", value: false },
      { name: "React JS", value: false }
  ])

  const onFormSubmit=(e)=>{
      e.preventDefault();
      //console.log(formState)
  }

  const handleCheckboxStatus=(ind)=>{
      let skillsArr=[...skills]
      skillsArr[ind].value=!skillsArr[ind].value;

      setSkills(skillsArr);
       
      let count=0;
      for(let index=0;index<skills.length;index++){
         if(skills[index].value===true){
            count=count+1;
         }
      }
      if(count<5){
         setErrors6({...errors6,skillerror:"Select atleast 5 skills"})
      }
      else{
         setErrors6({...errors6,skillerror:''})
         setErrors6(false)
      }
  }
  
  let [state,setState]=useState([])

   let offshore=['Chennai','Bangalore','Hyderabad','pune','Kochi']
   let onshore=['US','Non-US']
   const handleselect1=(e)=>{
     setState(offshore);
   }
   const handleselect2=(e)=>{
      setState(onshore)
   }
   
   const [errors1,setErrors1]=useState('');
   const [errors2,setErrors2]=useState('');
   const [errors3,setErrors3]=useState('');
   const [errors4,setErrors4]=useState('');
   const [errors5,setErrors5]=useState('');
   const [errors6,setErrors6]=useState('');

   

   
   

   useEffect(()=>{
      if(formState.associateName.length>=1 && formState.associateName.length<=4){
         setErrors1({...errors1,associateNameLengthErr:"Min length should be 5",associateNameRequiredErr:''})
      }
      else if(formState.associateName.length>30){
         setErrors1({...errors1,associateNameLengthErr:"Max length should be 30",associateNameRequiredErr:''})
      }

      else if(formState.associateName.length>=5 && formState.associateName.length<=30){
         setErrors1({...errors1,associateNameLengthErr:'',associateNameRequiredErr:''})
      }
      if(formState.associateName.length===0 && errors1.associateNameLengthErr!=='' && errors1.associateNameRequiredErr===''){
         setErrors1({...errors1,associateNameRequiredErr:"Associate name is required",associateNameLengthErr:''})
      }

      
   },[formState.associateName])

   useEffect(()=>{
      if(formState.associateId.length>=1 && formState.associateId.length<=5 ){
         setErrors2({...errors2,associateIdLengthErr:"Invalid Associate Id",associateIdRequiredErr:''})
      }
      else if(formState.associateId.length>6){
         setErrors2({...errors2,associateIdLengthErr:"Invalid Associate Id",associateIdRequiredErr:''})
      }

      else if(formState.associateId.length===6 ){
         setErrors2({...errors2,associateIdLengthErr:'',associateIdRequiredErr:''})
      }
      if(formState.associateId.length===0 && errors2.associateIdLengthErr!=='' && errors2.associateIdRequiredErr===''){
         setErrors2({...errors2,associateIdRequiredErr:"Associate Id is required",associateIdLengthErr:''})
      }
   },[formState.associateId])


   useEffect(()=>{
      if(formState.projectId.length>=1 && formState.projectId.length<=11){
      setErrors3({...errors3,projectIdLengthErr:"Invalid Project Id",projectIdRequiredErr:''})
   }
   if(formState.projectId.length>12){
      setErrors3({...errors3,projectIdLengthErr:"Invalid Project Id",projectIdRequiredErr:''})
   }

   else if(formState.projectId.length===12 ){
      setErrors3({...errors3,projectIdLengthErr:'',projectIdRequiredErr:''})
   }
   if(formState.projectId.length===0 && errors3.projectIdLengthErr!=='' && errors3.projectIdRequiredErr===''){
      setErrors3({...errors3,projectIdRequiredErr:"Project Id is required",projectIdLengthErr:''})
   }
  },[formState.projectId])

  useEffect(()=>{
   if(formState.profile.length>0){
      setErrors4({...errors2,profileLengthErr:'',profileRequiredErr:''})
   }
   if(formState.profile.length===0 && errors4.profileLengthErr!=='' && errors4.profileRequiredErr===''){
      setErrors4({...errors4,profileRequiredErr:"Please upload Profile picture",profileLengthErr:''})
   }
  },[formState.profile])

  useEffect(()=>{
   if(formState.comments.length>0){
      setErrors5({...errors5,commentsLengthErr:'',commentsRequiredErr:''})
   }
   if(errors5.commentsLengthErr!=='' && errors5.commentsRequiredErr===''){
      setErrors5({...errors5,commentsRequiredErr:"Please enter comments",commentsLengthErr:''})
   }
  },[formState.comments])
  

   //console.log(formState.associateName)

   const handleBlur1=(e)=>{
      if(e.target.value===''){
         setErrors1({...errors1,associateNameRequiredErr:"Associate name is required"})
      }
   }
   const handleBlur2=(e)=>{
      if(e.target.value===''){
         setErrors2({...errors2,associateIdRequiredErr:"Associate Id is required"})
      }
   }
   const handleBlur3=(e)=>{
      if(e.target.value===''){
         setErrors3({...errors3,projectIdRequiredErr:"Project Id is required"})
      }
   }

   const handleBlur4=(e)=>{
      if(e.target.value===''){
         setErrors4({...errors4,profileRequiredErr:"Please upload Profile picture"})
      }
   }

   const handleBlur5=(e)=>{
      if(e.target.value===''){
         setErrors5({...errors5,commentsRequiredErr:"Please enter comments"})
      }
   }
   //console.log("errors",Object.keys(errors).length)

   return(
      <form className="w-50 mx-auto mt-5" onSubmit={onFormSubmit}>
         <h1 className="mb-4 hed" >Associate Details</h1>
         <input type="text"
         className="form-control mb-3"
         name="associateName"
         autoComplete="off"
         placeholder="Associate Name"
         value={formState.associateName}
         onChange={e=>setformState({...formState,associateName:e.target.value})}
         onBlur={handleBlur1}
         required />

         {errors1.associateNameRequiredErr && <p className="text-danger">{errors1.associateNameRequiredErr}</p>}
         {errors1.associateNameLengthErr && <p className="text-danger">{errors1.associateNameLengthErr}</p>}

         <input type="number"
         className="form-control mb-3"
         name="associateId"
         autoComplete="off"
         placeholder="Associate Id"
         value={formState.associateId}
         onChange={e=>setformState({...formState,associateId:e.target.value})}
         onBlur={handleBlur2}
         required />

         {errors2.associateIdRequiredErr && <p className="text-danger">{errors2.associateIdRequiredErr}</p>}
         {errors2.associateIdLengthErr && <p className="text-danger">{errors2.associateIdLengthErr}</p>}

         <input type="text"
         className="form-control mb-3"
         name="projectId"
         autoComplete="off"
         placeholder="Project Id"
         value={formState.projectId}
         onChange={e=>setformState({...formState,projectId:e.target.value})}
         onBlur={handleBlur3}
         required />

         {errors3.projectIdRequiredErr && <p className="text-danger">{errors3.projectIdRequiredErr}</p>}
         {errors3.projectIdLengthErr && <p className="text-danger">{errors3.projectIdLengthErr}</p>}

          <div>
         <input type="radio" className="radio" name="location" id="m" value="offshore" onChange={handleselect1}></input>
          <label htmlFor="m">Offshore</label>

          <input type="radio" className="onsh" name="location" id="f" value="onshore" onChange={handleselect2}></input>
          <label htmlFor="f">Onshore</label>
          <br />
          <select name="name" id="" className="form-select" >
             <option>Select Location</option>
             {
                state.map((v,ind)=>{
                   return(
                      <option className="mt-1" value={v}>{v}</option>
                   )
                })
             }
          </select>
          </div>

          
          <div className="mb-4">
          <label> </label>
          {
              skills.map((skillsObj, ind)=>{
                  return(
                     <div className="form-check">
                       <input type="checkbox" key={ind}
                       onChange={e=>{handleCheckboxStatus(ind)}}
                       id={skillsObj.name} className="form-check-input"/>
                       <label htmlFor={skillsObj.name} className="form-check-label">{skillsObj.name}</label>
                        
                       </div>
                  )
              })
          }

         <p className="text-danger">{errors6.skillerror}</p>    
          </div>

          <input type="file"
         className="form-control mb-3"
         name="profile"
         autoComplete="off"
         placeholder="Choose File"
         value={formState.profile}
         onChange={e=>setformState({...formState,profile:e.target.value})}
         onBlur={handleBlur4}
         required />

     {errors4.profileRequiredErr && <p className="text-danger">{errors4.profileRequiredErr}</p>}

     <input type="textarea"
         className="form-control mb-3"
         name="comments"
         autoComplete="off"
         placeholder="Comments"
         value={formState.comments}
         onChange={e=>setformState({...formState,comments:e.target.value})}
         onBlur={handleBlur5}
         required />

         {errors5.commentsRequiredErr && <p className="text-danger">{errors5.commentsRequiredErr}</p>}

         <button type="submit" className="btn btn-primary" onClick={()=>empDetails(formState)}>Submit</button>
         <button type="reset" className="btn btn-danger">Reset</button>
      </form>
   )
}