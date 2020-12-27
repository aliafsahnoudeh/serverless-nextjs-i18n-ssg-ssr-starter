import Layout from '../../layout/layout';
import { getLanguageFromRequest } from '../../../lib/lang';

export default function LangIndex({ language, method }) {
	return (
		<Layout>
			<div>Testing....</div>
			<div>Method {method}</div>
			<div>Lang: {language}</div>
		</Layout>
	);
}
export async function getServerSidePropsMethod({ req, res }) {
	// console.log(req);
	var method = req.method;
	var currentLang = getLanguageFromRequest(req);
	return {
		props: {
			method: method,
			language: currentLang,
			username: 'testing',
		},
	};
}
