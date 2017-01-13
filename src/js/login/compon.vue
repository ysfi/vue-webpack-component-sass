<template>
	<header>
		<div>
			账号：<input type="text" v-model="username">
		</div>
		<div>
			密码：<input type="text" v-model="password">
		</div>
		<div>
			<input type="button" value="点击注册！" v-on:click="getAll">
		</div>
		<div>
			<hello></hello>
		</div>
	</header>
</template>
<script>
	import hello from './hello'
	export default {
		data(){
			return {
				username:'',
				password:''
			}
		},
		components: { hello },
		methods:{
			getAll(){
				if(this.username == '' || this.username == null){
					alert('账号名不可为空！');
					return false;
				}else if(this.password == '' || this.password == null){
					alert('密码不可为空！');
					return false;
				}
				console.log(this.username+'%'+this.password);
			}
		}
	}
</script>