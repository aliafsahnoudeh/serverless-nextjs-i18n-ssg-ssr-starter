import SinglePostPageContent, { getStaticPaths, getStaticProps } from "../../../components/page_contents/posts/[id]";

export default function Local(props) {
	return (
		<SinglePostPageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPaths();
}

export async function getStaticProps({ params }) {
	return await getStaticProps({ params });
}
