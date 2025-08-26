import React from 'react';


export default function Footer() {
return (
<footer style={{ borderTop: '1px solid #eee', padding: '10px 20px', marginTop: 20 }}>
<small>© Demo React CI/CD — {new Date().getFullYear()}</small>
</footer>
);
}