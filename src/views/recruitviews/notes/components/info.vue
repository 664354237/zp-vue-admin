<template>
  <div class="container-notes">
    <div class="notes-table">
      <div class="table-title">广东技术师范大学应聘人员信息表</div>
      <div class="table-info">
        <div class="item">
          <span class="name">应聘单位：</span>
          <input v-model="info.department" type="text" />
        </div>
        <div class="item">
          <span class="name">应聘岗位：</span>
          <input v-model="info.position" type="text" />
        </div>
        <!-- <div class="item">
          <span class="name">岗位代码：</span>
          <input type="text" />
        </div> -->
      </div>
      <div class="table-basic">
        <div class="basic-top">
          <div class="basic-left">
            <div class="item">
              <span class="name">姓名</span>
              <div class="form-input">
                <input v-model="info.name" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">性别</span>
              <div class="form-input">
                <input v-model="info.sex" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">民族</span>
              <div class="form-input">
                <input v-model="info.nation" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">出生年月</span>
              <div class="form-flex-input">
                <input v-model="info.birthDate" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">政治面貌</span>
              <div class="form-input">
                <input v-model="info.politicalOutlook" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">入党时间</span>
              <div class="form-input">
                <input v-model="info.joinPartyDate" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">籍贯</span>
              <div class="form-flex-input">
                <input v-model="info.nativePlace" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">现居住地</span>
              <div class="form-flex-input">
                <input v-model="info.nowHabitation" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">婚姻状况</span>
              <div class="form-input">
                <input v-model="info.marriage" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">学历学位</span>
              <div class="form-input">
                <input v-model="info.schooling" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">毕业院校</span>
              <div class="form-input">
                <input v-model="info.college" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">毕业时间</span>
              <div class="form-input">
                <input v-model="info.graduationTime" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">所学专业</span>
              <div class="form-input">
                <input v-model="info.speciality" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">学科(领域)</span>
              <div class="form-input">
                <input v-model="info.discipline" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">主要研究方向</span>
              <div class="form-input">
                <input v-model="info.researchDirection" type="text" />
              </div>
            </div>
            <div class="item">
              <span class="name">外语水平</span>
              <div class="form-input">
                <input v-model="info.englishLevel" type="text" />
              </div>
            </div>
          </div>
          <div class="basic-right">
            <div class="upload">
              <el-upload
                action=""
                class="avatar-uploader"
                :show-file-list="false"
                :before-upload="handleBeforeUpload"
              >
                <img :src="info.head" class="avatar" />
                <el-button v-if="info.head == ''" type="primary" class="orange"
                  >点击上传头像</el-button
                >
              </el-upload>
            </div>
            <div class="item">
              <span class="name">计算机水平</span>
              <div class="form-input">
                <input v-model="info.computerLevel" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div class="basic-bottom">
          <div class="item">
            <span class="name">职称及获得时间</span>
            <div class="form-input">
              <input v-model="info.nowTitleTime" type="text" />
            </div>
          </div>
          <div class="item">
            <span class="name">现工作单位</span>
            <div class="form-input">
              <input v-model="info.nowWorkUnit" type="text" />
            </div>
          </div>
          <div class="item">
            <span class="name">现任职务</span>
            <div class="form-input">
              <input v-model="info.duties" type="text" />
            </div>
          </div>
          <div class="item">
            <span class="name">联系电话</span>
            <div class="form-input">
              <input v-model="info.phone" type="text" />
            </div>
          </div>
          <div class="item">
            <span class="name">电子邮件</span>
            <div class="form-input">
              <input v-model="info.Email" type="text" />
            </div>
          </div>
          <div class="item">
            <span class="name">身份证号码</span>
            <div class="form-input">
              <input v-model="info.documentnumber" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div class="table-family">
        <div class="fam-info">
          家庭成员及主要社会关系（如“无”或其他情况,请在备注栏填写）
        </div>
        <div class="fam-form">
          <table class="fam-table">
            <thead>
              <tr>
                <th width="200">与本人关系</th>
                <th>姓名</th>
                <th>工作单位</th>
                <th>职务</th>
                <th>政治面貌</th>
                <th>现居住地</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>配偶</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.spouse.memberName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.familyInfo.spouse.unit" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.spouse.duties"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.spouse.politicalOutlook"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.spouse.nowHabitation"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.spouse.remark"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>子女</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.children.memberName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.children.unit"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.children.duties"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.children.politicalOutlook"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.children.nowHabitation"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.children.remark"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>父亲</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.father.memberName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.familyInfo.father.unit" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.father.duties"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.father.politicalOutlook"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.father.nowHabitation"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.father.remark"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>母亲</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.mother.memberName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.familyInfo.mother.unit" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.mother.duties"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.mother.politicalOutlook"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.mother.nowHabitation"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.familyInfo.mother.remark"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table-family">
        <div class="fam-info" style="border-top: 0px">学习经历</div>
        <div class="fam-form">
          <table class="fam-table">
            <thead>
              <tr>
                <th width="200">学习阶段</th>
                <th>起步时间（年/月-年/月）</th>
                <th>毕业院校</th>
                <th>所学专业</th>
                <th>是否全日制</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>初中</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.middleSchool.date"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.middleSchool.graduationSchool"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.middleSchool.speciality"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.middleSchool.fullTime"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>高中或中专</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="
                        info.profStudies.highOrTechnicalSecondarySchool.date
                      "
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="
                        info.profStudies.highOrTechnicalSecondarySchool
                          .graduationSchool
                      "
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="
                        info.profStudies.highOrTechnicalSecondarySchool
                          .speciality
                      "
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="
                        info.profStudies.highOrTechnicalSecondarySchool.fullTime
                      "
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>大专</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.juniorCollege.date"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.juniorCollege.graduationSchool"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.juniorCollege.speciality"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.juniorCollege.fullTime"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>本科</td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.undergraduateCourse.date"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="
                        info.profStudies.undergraduateCourse.graduationSchool
                      "
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.undergraduateCourse.speciality"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.undergraduateCourse.fullTime"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>硕士</td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profStudies.master.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.master.graduationSchool"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.master.speciality"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.master.fullTime"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>博士</td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profStudies.dr.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.dr.graduationSchool"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profStudies.dr.speciality"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profStudies.dr.fullTime" type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>最高学位论文标题及内容介绍</td>
                <td colspan="5">
                  <div class="form-input">
                    <input v-model="info.paperContent" type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>导师简介</td>
                <td colspan="5">
                  <div class="form-input">
                    <input v-model="info.mentorIntroduction" type="text" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table-family">
        <div class="fam-info" style="border-top: 0px">
          工作经历 <br />
          （正式工作经历、教学相关经历）
        </div>
        <div class="fam-form">
          <table class="fam-table">
            <thead>
              <tr>
                <th width="200">起止时间（年/月一年/月）</th>
                <th>工作单位</th>
                <th>职务</th>
                <th>是否签订脑洞合同及购买社保</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.one.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.one.unit" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profWorks.one.positionHeld"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.one.contract" type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.two.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.two.unit" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profWorks.two.positionHeld"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.two.contract" type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.three.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profWorks.three.unit" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profWorks.three.positionHeld"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profWorks.three.contract"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table-family">
        <div class="fam-info" style="border-top: 0px">
          近五年发表论文情况
          <br />
          （论文类别填中科院大类分区、EI、CSCD核心库、SSCI、A&HCI、人大复印报刊资料全文转载、CSSCI源刊、CSSCI扩展版、北大核心
          <br />
          等，按级别高低顺序填写。仅填写独立作者、第一作者、排名第一通讯者、博士学习阶段博导一作本人排名第二的论文。）
        </div>
        <div class="fam-form">
          <table class="fam-table">
            <thead>
              <tr>
                <th width="200">论文类别</th>
                <th>论文名称</th>
                <th>本人排名</th>
                <th>发表年份</th>
                <th>刊物名称</th>
                <th>ISSN号</th>
                <th>发表状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.one.unitNature"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.one.thesisName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.one.ranking"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.one.publicationsDate"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.one.publicationName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.one.issn"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.one.status"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.two.unitNature"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.two.thesisName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.two.ranking"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.two.publicationsDate"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.two.publicationName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.two.issn"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.two.status"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.three.unitNature"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.three.thesisName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.three.ranking"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.three.publicationsDate"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.three.publicationName"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.three.issn"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profEvalPaperInfos.three.status"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table-family">
        <div class="fam-info" style="border-top: 0px">
          近五年主持或参与科研项目情况
          <br />
          （按项目级别高低，先纵向再横向的顺序填写）
        </div>
        <div class="fam-form">
          <table class="fam-table">
            <thead>
              <tr>
                <th width="200">项目类型和编号</th>
                <th>项目级别</th>
                <th>纵向/横向</th>
                <th>项目名称</th>
                <th>本人排名</th>
                <th>立项时间/结项时间</th>
                <th>下达金额</th>
                <th>下达单位</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.one.type" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.one.projectLevel"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.one.direction"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.one.name" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.one.ranking"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.one.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.one.amount" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.one.unit" type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.two.type" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.two.projectLevel"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.two.direction"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.two.name" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.two.ranking"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.two.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.two.amount" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.two.unit" type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.three.type" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.three.projectLevel"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.three.direction"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.three.name" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.three.ranking"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.three.date" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profProjects.three.amount"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profProjects.three.unit" type="text" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table-family">
        <div class="fam-info" style="border-top: 0px">主要获奖情况</div>
        <div class="fam-form">
          <table class="fam-table">
            <thead>
              <tr>
                <th>获奖类型</th>
                <th width="200">本人排名</th>
                <th>获奖等级</th>
                <th>颁奖部门</th>
                <th>颁奖时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.one.awardType"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profAwards.one.ranking" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.one.awardLevel"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.one.awardingUnit"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.one.awardDate"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.two.awardType"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input v-model="info.profAwards.two.ranking" type="text" />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.two.awardLevel"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.two.awardingUnit"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.two.awardDate"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.three.awardType"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.three.ranking"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.three.awardLevel"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.three.awardingUnit"
                      type="text"
                    />
                  </div>
                </td>
                <td>
                  <div class="form-input">
                    <input
                      v-model="info.profAwards.three.awardDate"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table-family">
        <div class="fam-info" style="border-top: 0px">自我评价</div>
        <div class="fam-form">
          <div class="fotm-textarea">
            <textarea v-model="info.introduceYourself"></textarea>
          </div>
        </div>
      </div>
      <div class="table-statement">
        <span class="name">应聘人员声明</span>
        <div class="content">
          <div class="con-li">
            <span>1、是否曾受处分：</span>
            <el-radio-group v-model="info.punish">
              <el-radio :label="'是'">是</el-radio>
              <el-radio :label="'否'">否</el-radio>
            </el-radio-group>
          </div>
          <div class="con-li">
            <span
              >2、本人在表中所填信息及递交材料皆全面、真实、准确，如有弄虚作假、隐瞒个人情况、师德师风不端等不良行为，责任自负。</span
            >
          </div>
          <div class="con-li-name">
            <div class="signa">
              <span>本人签字：</span>
              <span class="li-span" @click="HandleSigna">
                <img
                  v-if="info.signatureDataURL"
                  :src="info.signatureDataURL"
                  alt="签名图像"
                  :data-signature="info.signatureDataURL"
                />
              </span>
            </div>
            <div class="flex-time">
              <span class="time-name">日期：</span>
              <input maxlength="4" v-model="info.signDate" type="text" />
              <!-- <span class="time-name">年</span>
              <input maxlength="2" v-model="info.signmonth"  type="text" />
              <span class="time-name">月</span>
              <input maxlength="2"  v-model="info.signday" type="text" />
              <span class="time-name">日</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="handle-btn" @click="sumbitData">提交</div>

    <!-- 签名弹框 -->
    <el-dialog title="签名" :visible.sync="signature" width="50%">
      <div class="sin-canvas">
        <canvas ref="canvas" width="600" height="300"></canvas>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="signature = false">取 消</el-button>
        <el-button type="primary" @click="HandleShot">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { GetDataTableInfoList } from '@/api/recruitviews/postdelivery/index.js';
import SignaturePad from 'signature_pad'; // 引入 SignaturePad 类
import { GetUserForm, ApplyRecruit } from '@/api/recruitviews/postdelivery/index.js'
import moment from 'moment';
export default {
  props: { file: { type: String, default: '' }, info: { type: Object, default: {} } },

  name: 'delivery',
  data() {
    return {
      radio: 2,
      signature: false,

    }
  },

  methods: {
    sumbitData() {
      this.$confirm('确定信息无误,提交申请该职位?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var data = {
          content: JSON.stringify(this.info),
          files: this.file,
          formType: "form1",
          recruit: this.$route.params.id,
          title: this.info.department + "-" + this.info.position + "-" + moment().format('YYYY年MM月DD日 HH:MM:SS') + "岗位申请"
        }
        console.log(data);
        ApplyRecruit(data).then(res => {
          this.$message({
            type: 'success',
            message: res.msg
          });
        })
      }).catch(() => {

      });
    },

    HandleShot() {
      const signatureData = this.signaturePad.toDataURL();
      this.info.signatureDataURL = signatureData;
      this.signature = false
    },
    HandleSigna() {
      this.signature = true
      this.$nextTick(() => {
        this.signaturePad = new SignaturePad(this.$refs.canvas);
      });
    },
    handleBeforeUpload(file) {
      // 读取文件并转换为 base64 格式
      let reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = (e) => {
        this.info.head = e.target.result
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scope>
.sin-canvas {
  width: 600px;
  border: 1px solid #000000;
  margin: 0 auto;
}
.container-notes {
  width: 100%;
  padding-bottom: 80px;
  .handle-btn {
    width: 130px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border-radius: 40px;
    color: #fff;
    background-color: #19134a;
    margin: 0 auto;
    margin-top: 80px;
    cursor: pointer;
  }
  .handle-btn:hover {
    opacity: 0.7;
    transition: 0.6s;
  }
  .notes-table {
    width: 75%;
    margin-left: 15%;
    border: 1px solid #000000;
    .table-title {
      text-align: center;
      color: #000;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid #303030;
      padding: 10px 0;
      margin-bottom: 20px;
    }
    .table-info {
      display: flex;
      align-items: center;
      .item {
        margin-right: 10px;
        .name {
          color: #000;
          font-size: 16px;
          font-weight: bold;
        }
        input {
          border: 0;
          outline: none;
        }
      }
    }
  }
  .basic-top {
    display: flex;
    .basic-left {
      width: calc(100% - 373px);
      display: flex;
      flex-wrap: wrap;
      .item {
        width: calc(100% / 4);
        display: flex;
        align-items: center;
        border: 1px solid #303030;
        .name {
          display: block;
          width: 50%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          text-align: center;
          border-right: 1px solid #303030;
          color: #0f0f0f;
        }
        .form-flex-input {
          width: 50%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          display: flex;
          align-items: center;
          input {
            display: block;
            width: 100%;
            height: 80px;
            text-align: center;
            line-height: 80px;
            border: 0px;
            outline: none;
            color: #ed8035;
          }
        }
        .form-input {
          width: 50%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          outline: none;
          input {
            display: block;
            width: 100%;
            height: 80px;
            text-align: center;
            line-height: 80px;
            border: 0px;
            outline: none;
            color: #ed8035;
          }
        }
      }
      .item:nth-child(1n) {
        border-left: 0;
        border-bottom: 0;
      }
    }
    .basic-right {
      width: 373px;
      .upload {
        height: 244px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #303030;
        border-bottom: 1px solid #303030;
        .avatar {
          display: block;
          max-width: 95%;
          max-height: 95%;
        }
      }
      .item {
        display: flex;
        align-items: center;
        .name {
          display: block;
          width: 50%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          text-align: center;
          border-right: 1px solid #303030;
          color: #0f0f0f;
        }
        .form-input {
          width: 50%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          outline: none;
          input {
            display: block;
            width: 100%;
            height: 80px;
            text-align: center;
            line-height: 80px;
            border: 0px;
            outline: none;
            color: #ed8035;
          }
        }
      }
    }
  }
  .basic-bottom {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      width: calc(100% / 3);
      display: flex;
      align-items: center;
      border: 1px solid #303030;
      .name {
        display: block;
        width: 50%;
        height: 80px;
        text-align: center;
        line-height: 80px;
        text-align: center;
        border-right: 1px solid #303030;
        color: #0f0f0f;
      }
      .form-input {
        width: 50%;
        height: 80px;
        text-align: center;
        line-height: 80px;
        outline: none;
        input {
          display: block;
          width: 100%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          border: 0px;
          outline: none;
          color: #ed8035;
        }
      }
    }
    .item:nth-child(1n) {
      border-left: 0;
      border-bottom: 0;
    }
    .item:nth-child(3n) {
      border-right: 0px;
    }
  }
  .table-statement {
    display: flex;
    align-items: center;
    height: 185px;
    .name {
      display: block;
      width: 200px;
      height: 100%;
      line-height: 185px;
      text-align: center;
      border-right: 1px solid #303030;
    }
    .content {
      width: calc(100% - 225px);
      padding-left: 5px;
      padding-right: 20px;
    }
    .con-li-name {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .signa {
        display: flex;
        align-items: center;
      }
      .li-span {
        display: block;
        width: 200px;
        height: 50px;
        cursor: pointer;
        img {
          display: block;
          max-height: 100%;
        }
      }
      .flex-time {
        display: flex;
        align-items: center;
        input {
          display: block;
          width: 150px;
          border: 0px;
          outline: none;
          text-align: center;
        }
      }
    }
  }
  .table-family {
    .fotm-textarea {
      width: 100%;
      height: 145px;
      border-bottom: 1px solid #303030;
      textarea {
        display: block;
        width: 100%;
        height: 100%;
        border: 0px;
        outline: none;
        resize: none;
        color: #ed8035;
      }
    }
    .fam-info {
      background-color: #d9d9d9;
      border-top: 1px solid #303030;
      border-bottom: 1px solid #303030;
      padding: 10px 0;
      text-align: center;
      color: #000;
      font-weight: bold;
      font-size: 16px;
    }
    .fam-table {
      width: 100%;
      border-spacing: 0px;
      th {
        padding: 0px;
        border-bottom: 1px solid #303030;
        border-right: 1px solid #303030;
        height: 80px;
        line-height: 80px;
      }
      th:last-child {
        border-right: 0;
      }

      td {
        text-align: center;
        padding: 0px;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #303030;
        border-right: 1px solid #303030;

        .form-input {
          width: 100%;
          height: 100%;
          input {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 80px;
            border: 0px;
            outline: none;
            color: #ed8035;
          }
        }
      }
      td:last-child {
        border-right: 0;
      }
    }
  }
}
</style>