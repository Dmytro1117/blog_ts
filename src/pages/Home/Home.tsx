import { useEffect } from 'react';
import { fetchBlogs } from 'types/operations';
import { useAppDispatch, useAppSelector } from 'types/hooks';
import { Section } from 'components/Section/Section';
import { BlogForm } from 'components/BlogForm/BlogForm';
import { Loader } from 'components/Loader/Loader';
import { Container, TitlePage } from './HomeStyles';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(state => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <Container>
      <TitlePage>Додати запис</TitlePage>
      {isLoading && !error && <Loader />}
      <Section title={'Додати новий:'}>
        <BlogForm />
      </Section>
    </Container>
  );
};
export default Home;
