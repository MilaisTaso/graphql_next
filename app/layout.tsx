import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import '@/app/globals.css';
import { Providers } from '@/app/components/providers';
import { env } from '@/env/client';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: env.NEXT_PUBLIC_APP_NAME,
    template: `%s | ${env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: 'Sample Todo application using GraphQL',
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressContentEditableWarning>
      <body
        className={cn(
          'antialiased',
          'font-sans',
          GeistMono.variable,
          GeistSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
