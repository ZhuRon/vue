<template>
    <div class="step1">
        <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name" size="large"></el-input>
            </el-form-item>
            <el-form-item label="" prop="fenlei">
                <el-row style="height:35px;" type="flex" align="middle">
                    <el-col :span="3" style="widt:90px;">
                        <div class="el-form-item__label">活动分类</div>
                    </el-col>
                    <el-col :span="2" style="widt:90px;">
                        <el-button type="text" @click.native="dialogFormFenleiVisable=true">
                            设置
                        </el-button>
                    </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenLei">
                    <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name">

                    </el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <el-dialog title="设置活动分类" :visible.sync="dialogFormFenleiVisable">
            <el-form>
                <el-form-item>
                    <el-tag v-for="fenLei of ruleForm.fenLeis" type="primary" :key="fenLei" :closable="true">
                        {{fenLei.name}}
                    </el-tag>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogFormFenleiVisable:false,
            ruleForm:{
                name:'',
                fenLeis:[
                    {name:'未发布'},
                    {name:'测试活动'},
                    {name:'精彩活动'},
                ],
                fenLei:'测试活动',
                tags:[]
        }
        }

    }
}
</script>

<style>

</style>
