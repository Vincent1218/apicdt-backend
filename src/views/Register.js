import { useState } from 'react'
import React from 'react'
import '../components/css/Register.css';
import logoBase from '../assets/image/yatai 10th logo-10.png';
import logoTop1 from '../assets/image/yatai 10th logo-bian.png';

const Register = () => {

  const [engSchoolName, setEngSchoolName] = useState('')
  const [chiSchoolName, setChiSchoolName] = useState('')
  const [engTeamLeaderName, setEngTeamLeaderName] = useState('')
  const [chiTeamLeaderName, setChiTeamLeaderName] = useState('')
  const [teamLeaderContact, setTeamLeaderContact] = useState('')
  const [teamLeaderEmail, setTeamLeaderEmail] = useState('')
  const [debateTopics_1, setDebateTopics_1] = useState('')
  const [debateTopics_2, setDebateTopics_2] = useState('')


  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(e)

    const registerData={engSchoolName,
                        chiSchoolName,
                        engTeamLeaderName,
                        chiTeamLeaderName,
                        teamLeaderContact,
                        teamLeaderEmail,
                        debateTopics_1,
                        debateTopics_2}
    
    const addRegisterData = async (registerData) =>{
      const res = await fetch ('',{
        method : 'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(registerData)
      })
      const data = res.json()
      console.log(data)
    }
    
    addRegisterData(registerData)

    setEngSchoolName = ('')
    setChiSchoolName = ('')
    setEngTeamLeaderName = ('')
    setChiTeamLeaderName = ('')
    setTeamLeaderContact = ('')
    setTeamLeaderEmail = ('')
    setDebateTopics_1 = ('')
    setDebateTopics_2 = ('')

  }
  
  return (
    <section className="header-gradient"> 
      <div className="container main_block">
        <div className="register_header">
            <span className = "englishF"> Register / </span> <span> 注册 </span>
        </div>
        <div className="regBlock row">
          <form className="col-md-8 col-12 regForm " onSubmit = {onSubmit}>
            <div className="school container">
              <div className="schoolPart formHeader">
                  <span className = "englishF"> Particulars of School / </span> <span> 学校资料 </span>
              </div>
              <div className="row schoolPartForm">
                <div className="mb-3 col-6">
                  <input type="text" className="form-control englsihF" value={engSchoolName} placeholder="Name of School" onChange={(e) => setEngSchoolName(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                  <input type="text" className="form-control " value={chiSchoolName} placeholder="学校名称" onChange={(e) => setChiSchoolName(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="leader container">
              <div className="leaderPart formHeader">
                  <span className = "englishF"> Particulars of Team Leader / </span> <span> 队长资料 </span>
              </div>
              <div className="row leaderPartForm">
                <div className="mb-3 col-6">
                  <input type="text" className="form-control" value={engTeamLeaderName} placeholder="Name of Team Leader" onChange={(e) => setEngTeamLeaderName(e.target.value)}/>
                </div>
                <div className="mb-3 col-6">
                  <input type="text" className="form-control" value={chiTeamLeaderName} placeholder="队长姓名" onChange={(e) => setChiTeamLeaderName(e.target.value)} />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" value={teamLeaderContact} placeholder="队长联络电话" onChange={(e) => setTeamLeaderContact(e.target.value)}/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" value={teamLeaderEmail} placeholder="队长电邮地址" onChange={(e) => setTeamLeaderEmail(e.target.value)}/>
              </div>
            </div>
            <div className="topics container">
              <div className="ldebateTopics formHeader">
                  <span className = "englishF"> Debate Topics / </span> <span> 辩题 </span>
              </div>
              <div className="row debateTopicsForm">
                <div className="col-6">
                  <input type="text" className="form-control" value={debateTopics_1} placeholder="辩题一" onChange={(e) => setDebateTopics_1(e.target.value)}/>
                </div>
                <div className="col-6">
                  <input type="text" className="form-control" value={debateTopics_2} placeholder="辩题二" onChange={(e) => setDebateTopics_2(e.target.value)}/>
                </div>
              </div>
              <div className="form-text remarks englishF">Remarks: The topics submitted will be used for this tournament. </div>
              <div className="form-text remarks">备注：所提交之辩题将会作为本赛事之用 </div>
            </div>
            <button  type="submit" className="btn btn-primary">
              <span className = "englishF"> Submit / </span> <span> 提交 </span>
            </button>
          </form>
          <div className="col-4 logo">
            <img src= {logoBase} alt="Asia-Pacific Intervarsity Chinese Debate Tournament" className="ten-logo" width="80%" />
            <img src={logoTop1} alt="Asia-Pacific Intervarsity Chinese Debate Tournament" className="bian-logo" width="80%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
