<template>
    <div class="container-notes">
        <div class="notes-table">
            <div class="table-title">广东技术师范大学应聘人员信息表</div>
            <div class="table-info">
                <div class="item">
                    <span class="name">应聘单位：</span>
                    <input type="text">
                </div>
                <div class="item">
                    <span class="name">应聘岗位：</span>
                    <input type="text">
                </div>
                <div class="item">
                    <span class="name">岗位代码：</span>
                    <input type="text">
                </div>
            </div>
            <div class="table-basic">
                <div class="basic-top">
                    <div class="basic-left">
                        <div class="item">
                            <span class="name">姓名</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">性别</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">民族</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">出生年月</span>
                            <div class="form-flex-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">政治面貌</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">入党时间</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">籍贯</span>
                            <div class="form-flex-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">现居住地</span>
                            <div class="form-flex-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">婚姻状况</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">学历学位</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">毕业院校</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">毕业时间</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">所学专业</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">学科(领域)</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">主要研究方向</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                        <div class="item">
                            <span class="name">外语水平</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                    </div>
                    <div class="basic-right">
                        <div class="upload">
                            <el-upload
                                action=""
                                class="avatar-uploader"
                                :show-file-list="false"
                                :before-upload="handleBeforeUpload">
                                <img :src="head" class="avatar" />
                                <el-button v-if="head == ''" type="primary" class="orange">点击上传头像</el-button>
                            </el-upload>
                        </div>
                        <div class="item">
                            <span class="name">计算机水平</span>
                            <div class="form-input">
                                <input type="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basic-bottom">
                    <div class="item">
                        <span class="name">职称及获得时间</span>
                        <div class="form-input">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <span class="name">现工作单位</span>
                        <div class="form-input">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <span class="name">现任职务</span>
                        <div class="form-input">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <span class="name">联系电话</span>
                        <div class="form-input">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <span class="name">电子邮件</span>
                        <div class="form-input">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <span class="name">身份证号码</span>
                        <div class="form-input">
                            <input type="text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-family">
                <div class="fam-info">家庭成员及主要社会关系（如“无”或其他情况,请在备注栏填写）</div>
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
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>子女</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>父亲</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>母亲</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="table-family">
                <div class="fam-info" style="border-top: 0px;">学习经历</div>
                <div class="fam-form">
                    <table class="fam-table">
                        <thead>
                            <tr>
                                <th width="200">学习阶段</th>
                                <th>初中</th>
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
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>高中或中专</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>大专</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>本科</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>硕士</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>博士</td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>最高学位论文标题及内容介绍</td>
                                <td colspan="5">
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>导师简介</td>
                                <td colspan="5">
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="table-family">
                <div class="fam-info" style="border-top: 0px;">工作经历 <br> （正式工作经历、教学相关经历）</div>
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
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="table-family">
                <div class="fam-info" style="border-top: 0px;">
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
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="table-family">
                <div class="fam-info" style="border-top: 0px;">
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
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="table-family">
                <div class="fam-info" style="border-top: 0px;">
                    主要获奖情况
                </div>
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
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-input">
                                        <input type="text">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="table-family">
                <div class="fam-info" style="border-top: 0px;">
                    自我评价
                </div>
                <div class="fam-form">
                    <div class="fotm-textarea">
                        <textarea></textarea>
                    </div>
                </div>
            </div>
            <div class="table-statement">
                <span class="name">应聘人员声明</span>
                <div class="content">
                    <div class="con-li">
                        <span>1、是否曾受处分：</span>
                        <el-radio-group v-model="radio">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="2">否</el-radio>
                        </el-radio-group>
                    </div>
                    <div class="con-li">
                        <span>2、本人在表中所填信息及递交材料皆全面、真实、准确，如有弄虚作假、隐瞒个人情况、师德师风不端等不良行为，责任自负。</span>
                    </div>
                    <div class="con-li-name">
                        <div class="signa">
                            <span>本人签字：</span>
                            <span class="li-span" @click="HandleSigna">
                                <img v-if="signatureDataURL" :src="signatureDataURL" alt="签名图像" :data-signature="signatureDataURL">
                            </span>
                        </div>
                        <div class="flex-time">
                            <span class="time-name">日期：</span>
                            <input maxlength="4" type="text">
                            <span class="time-name">年</span>
                            <input maxlength="2" type="text">
                            <span class="time-name">月</span>
                            <input maxlength="2" type="text">
                            <span class="time-name">日</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="handle-btn">
            提交
        </div>

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
import SignaturePad from 'signature_pad'; // 引入 SignaturePad 类
export default {
    name: 'delivery',
    data() {
        return {
            radio: 2,
            signature: false,
            signatureDataURL: '',
            head: ''
        }
    },
    mounted() {
       
    },
    methods: {
        HandleShot(){
            const signatureData = this.signaturePad.toDataURL();
            this.signatureDataURL = signatureData;
            this.signature = false
        },
        HandleSigna(){
            this.signature = true
            this.$nextTick(() => {
                this.signaturePad = new SignaturePad(this.$refs.canvas);
            });
        },
        handleBeforeUpload(file){
            // 读取文件并转换为 base64 格式
            let reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onload = (e) => {
                this.head = e.target.result
            }
        }
    },
    components:{
        
    }
}
</script>

<style lang="scss" scope>
.sin-canvas{
    width: 600px;
    border: 1px solid #000000;
    margin: 0 auto;
}
.container-notes{
    width: 100%;
    padding-bottom: 80px;
    .handle-btn{
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
    .handle-btn:hover{
        opacity: 0.7;
        transition: 0.6s;
    }
    .notes-table{
        border: 1px solid #000000;
        .table-title{
            text-align: center;
            color: #000;
            font-size: 18px;
            font-weight: bold;
            border-bottom: 1px solid #303030;
            padding: 10px 0;
            margin-bottom: 20px;
        }
        .table-info{
            display: flex;
            align-items: center;
            .item{
                margin-right: 10px;
                .name{
                    color: #000;
                    font-size: 16px;
                    font-weight: bold;
                }
                input{
                    border: 0;
                    outline: none;
                }
            }
        }
    }
    .basic-top{
        display: flex;
        .basic-left{
            width: calc(100% - 373px);
            display: flex;
            flex-wrap: wrap;
            .item{
                width: calc(100%/4);
                display: flex;
                align-items: center;
                border: 1px solid #303030;
                .name{
                    display: block;
                    width: 50%;
                    height: 80px;
                    text-align: center;
                    line-height: 80px;
                    text-align: center;
                    border-right: 1px solid #303030;
                    color: #0f0f0f;
                }
                .form-flex-input{
                    width: 50%;
                    height: 80px;
                    text-align: center;
                    line-height: 80px;
                    display: flex;
                    align-items: center;
                    input{
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
                .form-input{
                    width: 50%;
                    height: 80px;
                    text-align: center;
                    line-height: 80px;
                    outline: none;
                    input{
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
            .item:nth-child(1n){
                border-left: 0;
                border-bottom: 0;
            }
        }
        .basic-right{
            width: 373px;
            .upload{
                height: 244px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-top: 1px solid #303030;
                border-bottom: 1px solid #303030;
                .avatar{
                    display: block;
                    max-width: 95%;
                    max-height: 95%;
                }
            }
            .item{
                display: flex;
                align-items: center;
                .name{
                    display: block;
                    width: 50%;
                    height: 80px;
                    text-align: center;
                    line-height: 80px;
                    text-align: center;
                    border-right: 1px solid #303030;
                    color: #0f0f0f;
                }
                .form-input{
                    width: 50%;
                    height: 80px;
                    text-align: center;
                    line-height: 80px;
                    outline: none;
                    input{
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
    .basic-bottom{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .item{
            width: calc(100%/3);
            display: flex;
            align-items: center;
            border: 1px solid #303030;
            .name{
                display: block;
                width: 50%;
                height: 80px;
                text-align: center;
                line-height: 80px;
                text-align: center;
                border-right: 1px solid #303030;
                color: #0f0f0f;
            }
            .form-input{
                width: 50%;
                height: 80px;
                text-align: center;
                line-height: 80px;
                outline: none;
                input{
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
        .item:nth-child(1n){
            border-left: 0;
            border-bottom: 0;
        }
        .item:nth-child(3n){
            border-right: 0px;
        }
    }
    .table-statement{
        display: flex;
        align-items: center;
        height: 185px;
        .name{
            display: block;
            width: 200px;
            height: 100%;
            line-height: 185px;
            text-align: center;
            border-right: 1px solid #303030;
        }
        .content{
            width: calc(100% - 225px);
            padding-left: 5px;
            padding-right: 20px;
        }
        .con-li-name{
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .signa{
                display: flex;
                align-items: center;
            }
            .li-span{
                display: block;
                width: 200px;
                height: 50px;
                cursor: pointer;
                img{
                    display: block;
                    max-height: 100%;
                }
            }
            .flex-time{
                display: flex;
                align-items: center;
                input{
                    display: block;
                    width: 50px;
                    border: 0px;
                    outline: none;
                    text-align: center;
                }
            }
        }
    }
    .table-family{
        .fotm-textarea{
            width: 100%;
            height: 145px;
            border-bottom: 1px solid #303030;
            textarea{
                display: block;
                width: 100%;
                height: 100%;
                border: 0px;
                outline: none;
                resize: none;
                color: #ed8035; 
            }
        }
        .fam-info{
            background-color: #d9d9d9;
            border-top: 1px solid #303030;
            border-bottom: 1px solid #303030;
            padding: 10px 0;
            text-align: center;
            color: #000;
            font-weight: bold;
            font-size: 16px;
        }
        .fam-table{
            width: 100%;
            border-spacing: 0px;
            th {
                padding: 0px;
                border-bottom: 1px solid #303030;
                border-right: 1px solid #303030;
                height: 80px;
                line-height: 80px;
            }
            th:last-child{
                border-right: 0;
            }

            td {
                text-align: center;
                padding: 0px;
                height: 80px;
                line-height: 80px;
                border-bottom: 1px solid #303030;
                border-right: 1px solid #303030;

                .form-input{
                    width: 100%;
                    height: 100%;
                    input{
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
            td:last-child{
                border-right: 0;
            }
        }
    }
}
</style>