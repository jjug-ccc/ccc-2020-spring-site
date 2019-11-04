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
							<td class="col-sm-9 col-6"><a v-bind:href="createDescribeLink(session.identifier)" target="_blank" rel="noopener noreferrer">{{ session.title }}</a></td><td class="col-sm-3 col-6">{{ session.speakerName }}</td>
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
							<td class="col-sm-9 col-6"><a v-bind:href="createDescribeLink(session.identifier)" target="_blank" rel="noopener noreferrer">{{ session.title }}</a></td><td class="col-sm-3 col-6">{{ session.speakerName }}</td>
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
							<td class="col-sm-9 col-6"><a v-bind:href="createDescribeLink(session.identifier)" target="_blank" rel="noopener noreferrer">{{ session.title }}</a></td><td class="col-sm-3 col-6">{{ session.speakerName }}</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import beginnersSessions from '../public/assets/data/sessions_beginner.json';
	import intermediateSessions from '../public/assets/data/sessions_intermediate.json';
	import advancedSessions from '../public/assets/data/sessions_advanced.json';

	export default {
		name: "sessions",
		data() {
			return {
				beginnersSessions: beginnersSessions,
				intermediateSessions: intermediateSessions,
				advancedSessions: advancedSessions
			}
		},
		methods: {
			createDescribeLink: function (identifier) {
				return 'https://jjug-cfp.cfapps.io/submissions/' + identifier;
			}
		}
	}
</script>
