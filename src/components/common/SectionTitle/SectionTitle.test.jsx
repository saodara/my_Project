import { render, screen } from '@testing-library/react';
import SectionTitle from './SectionTitle';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme/theme';

const MockSectionTitle = ({ title, text }) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <SectionTitle title={title} text={text} />
            </ThemeProvider>
        </BrowserRouter>
    )
}

test('renders section title with title and text', () => {
  const title = 'Test Title';
  const text = 'Test Text';
  render(<MockSectionTitle title={title} text={text} />);

  const titleElement = screen.getByText(title);
  const textElement = screen.getByText(text);

  expect(titleElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
