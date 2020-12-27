import HomePageContent, { getStaticPathsMethod, getStaticPropsMethod } from "../../components/page_contents/index";

export default function Local(props) {
	return (
		<HomePageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPathsMethod();
}

export async function getStaticProps({ params }) {
	return await getStaticPropsMethod({ params });
}