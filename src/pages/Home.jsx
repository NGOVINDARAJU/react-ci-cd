import React from 'react';
import Card from '../components/Card';


export default function Home() {
return (
<div>
<Card title="Welcome">
This is a demo React app demonstrating CI/CD deployment to a Linux server.
</Card>
<Card title="Features">
<ul>
<li>Routing</li>
<li>3 Reusable components (Header, Footer, Card)</li>
<li>CI: lint/test/build</li>
<li>CD: deploy build to server via rsync/ssh + Nginx</li>
</ul>
</Card>
</div>
);
}