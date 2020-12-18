import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

function Login() {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Welcome to The Shaikh Ayaz University</h1>
			<div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-around' }}>
				<div>
					<Title>Login</Title>
					<Label>Username</Label>
					<br />
					<Input type="text" placeholder="Username" />
					<br />
					<Label>Password</Label>
					<br />
					<Input type="password" placeholder="Password" />
					<br />
					<Button>Login</Button>
				</div>
				<div>
					<Image src="/illustration/login.png" alt="std" width="600" height="400" />
				</div>
			</div>
		</div>
	);
}

export default Login;

const Title = styled.h1`
	text-align: center;
	color: #8c8c8c;
`;
const Label = styled.label`
	font-size: 18px;
	color: #8c8c8c;
`;

const Input = styled.input`
	padding: 10px 20px;
	border-radius: 3px;
	font-size: 20px;
	width: 300px;
	margin-bottom: 20px;
	box-shadow: 0 10px 6px -6px #777;
	border: 1px solid #ebebeb;
	background-color: #ebebeb;
`;
const Button = styled.button`
	padding: 10px 20px;
	border-radius: 3px;
	width: 100%;
	font-size: 20px;
	width: 340px;
	color: #8c8c8c;
	box-shadow: 0 10px 6px -6px #777;
	border: 1px solid #ebebeb;
	background-color: #ebebeb;
`;
