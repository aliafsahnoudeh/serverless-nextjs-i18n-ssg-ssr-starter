import HomePageContent, { getStaticPaths, getStaticProps } from "../../components/page_contents/index";

export default function Local(props) {
	return (
		<HomePageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPaths();
}

export async function getStaticProps({ params }) {
	return await getStaticProps({ params });
}