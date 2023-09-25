import { render } from '@testing-library/react';
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a button', () => {
    const { getByText } = render(<Home />)
    expect(getByText('퀴즈 풀기')).toBeInTheDocument()
  })
})