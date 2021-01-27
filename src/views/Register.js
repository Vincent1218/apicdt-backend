import React from 'react'
import './css/Register.css';
import logoBase from '../assets/image/yatai 10th logo-10.png';
import logoTop1 from '../assets/image/yatai 10th logo-bian.png';

const Register = () => {
  
  return (
    <section className="logo-block header-gradient"> 
      <div className="container main_block">
        <div className="register_header">Register / 注册</div>
        <div className="regBlock row">
          <form className="col-md-8 col-12 regForm ">
            <div className="school container">
              <div className="schoolPart formHeader"> Particulars of School / 学校资料</div>
              <div className="row schoolPartForm">
                <div className="mb-3 col-6">
                  <input type="text" className="form-control " id="engSchoolName" placeholder="Name of School" />
                </div>
                <div className="mb-3 col-6">
                  <input type="text" className="form-control" id="chiSchoolName" placeholder="学校名称" />
                </div>
              </div>
            </div>
            <div className="leader container">
              <div className="leaderPart formHeader"> Particulars of Team Leader / 队长资料</div>
              <div className="row leaderPartForm">
                <div className="mb-3 col-6">
                  <input type="text" className="form-control" id="engTeamLeaderName" placeholder="Name of Team Leader" />
                </div>
                <div className="mb-3 col-6">
                  <input type="text" className="form-control" id="chiTeamLeaderName" placeholder="队长姓名" />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="teamLeaderContact" placeholder="Contact No. of Team Leader / 队长联络电话" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="teamLeaderEmail" placeholder="Email Address of Team Leader / 队长电邮地址" />
              </div>
            </div>
            <div className="topics container">
              <div className="debateTopics formHeader"> Debate Topics / 辩题</div>
              <div className="row debateTopicsForm">
                <div className="col-6">
                  <input type="text" className="form-control" id="debateTopics" placeholder="Debate Topics 1 / 辩题一" />
                </div>
                <div className="col-6">
                  <input type="text" className="form-control" id="debateTopics" placeholder="Debate Topics 2 / 辩题二" />
                </div>
              </div>
              <div className="form-text remarks">Remarks: The topics submitted will be used for this tournament. </div>
              <div className="form-text remarks">备注：所提交之辩题将会作为本赛事之用 </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit / 提交</button>
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
