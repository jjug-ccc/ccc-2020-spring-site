<template>
	<div class="py-5">
		<div class="container">
			<div>
				<div class="col-md-12">
					<h4>初心者向け</h4>
				</div>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="thead-light">
						<tr class="d-sm-flex d-flex"><th class="col-sm-9 col-6">タイトル</th><th class="col-sm-3 col-6">スピーカー</th></tr>
						</thead>
						<tbody>
						<tr v-for="session in beginnersSessions" class="d-sm-flex d-flex">
							<td class="col-sm-9 col-6"><router-link :to="'sessions/' + session.identifier">{{ session.title }}</router-link></td><td class="col-sm-3 col-6">{{ session.speakerName }}</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-12">
					<h4>中級者向け</h4>
				</div>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="thead-light">
						<tr class="d-sm-flex d-flex"><th class="col-sm-9 col-6">タイトル</th><th class="col-sm-3 col-6">スピーカー</th></tr>
						</thead>
						<tbody>
						<tr v-for="session in intermediateSessions" class="d-sm-flex d-flex">
							<td class="col-sm-9 col-6"><router-link :to="'sessions/' + session.identifier">{{ session.title }}</router-link></td><td class="col-sm-3 col-6">{{ session.speakerName }}</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-12">
					<h4>上級者向け</h4>
				</div>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="thead-light">
						<tr class="d-sm-flex d-flex"><th class="col-sm-9 col-6">タイトル</th><th class="col-sm-3 col-6">スピーカー</th></tr>
						</thead>
						<tbody>
						<tr v-for="session in advancedSessions" class="d-sm-flex d-flex">
							<td class="col-sm-9 col-6"><router-link :to="'sessions/' + session.identifier">{{ session.title }}</router-link></td><td class="col-sm-3 col-6">{{ session.speakerName }}</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	const axios = require('axios');

	export default {
		name: "sessions",
		data() {
			return {
				beginnersSessions: {},
				intermediateSessions: {},
				advancedSessions: {}
			}
		},
		beforeMount() {
			const self = this;
			const baseUrl = 'http://www.java-users.jp/api/submission-page/2019Spring/';
			axios.get(baseUrl + 'BEGINNER', {
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					'Access-Control-Allow-Origin': '*',
				},
				data: {}
			}).then(response => {
				self.beginnersSessions = response.data;
			});
			axios.get(baseUrl + 'INTERMEDIATE').then(response => {
				self.intermediateSessions = response.data;
			});
			axios.get(baseUrl + 'ADVANCED').then(response => {
				self.advancedSessions = response.data;
			});
		}
	}
</script>
