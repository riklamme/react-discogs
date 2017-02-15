import React from 'react';

class AccountForm extends React.Component {
	createAccount(event) {
		event.preventDefault();

		const account = {
			username: this.username.value,
			password: this.password.value
		}

		this.props.addAccount(account);
		this.accountForm.reset();
	}

	render() {
		return (
			<div className="account-form">
				<h3>Form</h3>
				<form ref={(input) => this.accountForm = input} onSubmit={(e) => this.createAccount(e)}>
					<input ref={(input) => this.username = input} type="text" placeholder="Username" />
					<input ref={(input) => this.password = input} type="text" placeholder="Password" />
					<button type="submit">Create</button>
				</form>
			</div>
		)
	}
}

export default AccountForm;