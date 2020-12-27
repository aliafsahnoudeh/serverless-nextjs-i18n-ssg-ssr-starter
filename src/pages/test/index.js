import TestPageContent, { getServerSidePropsMethod } from "../../components/page_contents/test";

export default function Local(props) {
	return (
		<TestPageContent { ...props } />
	);
}

export async function getServerSideProps({ req, res }) {
	return await getServerSidePropsMethod({ req, res });
}