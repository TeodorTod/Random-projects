import AddPostForm from "./app/features/posts/AddPostForm";
import PostsList from "./app/features/posts/PostList";

function App() {
  return (
    <main className="App">
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;
