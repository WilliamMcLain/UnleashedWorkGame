<<<<<<< HEAD
import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, Macro, useProductContext, useState } from '@forge/ui';

const fetchCommentsForContent = async (contentId) => {
  const res = await api
    .asUser()
    .requestConfluence(route`/wiki/rest/api/content/${contentId}/child/comment`);

  const data = await res.json();
  return data.results;
};
=======
import ForgeUI, { 
    render, QueuePage, Fragment, Text 
} from '@forge/ui';

//test push 
>>>>>>> 6207ab7db06661823d75c05bd10dc130f5e9bdb7

const App = () => {
  const context = useProductContext();
  const [comments] = useState(async () => await fetchCommentsForContent(context.contentId));

  console.log(`Number of comments on this page: ${comments.length}`);

  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Text>
        Number of comments on this page: {comments.length}
      </Text>
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
  />
);