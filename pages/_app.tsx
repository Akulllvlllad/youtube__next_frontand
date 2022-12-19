import '../app/assets/styles/globals.scss'
import '../app/assets/styles/old-styles.sass'
import { AuthProvider } from '../app/providers/AuthProvider'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
			
		</QueryClientProvider>
	)
}
