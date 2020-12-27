import PostsPageContent, { getStaticPathsMethod, getStaticPropsMethod } from "../../../components/page_contents/posts";

export default function Local(props) {
	return (
		<PostsPageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPathsMethod();
}

export async function getStaticProps({ params }) {
	return await getStaticPropsMethod({ params });
}
