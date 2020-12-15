import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Convergence&display=swap" rel="stylesheet" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Layout />
				<h1>Netlify added</h1>
			</main>
		</div>
	);
}
