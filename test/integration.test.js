
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

describe('Campus Desk Integration Tests', () => {

    test('Homepage should link to registration page', () => {
        const index = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(index).toContain('register.html');
    });

    test('Homepage should link to contact page', () => {
        const index = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(index).toContain('contact.html');
    });

    test('Registration page should exist', () => {
        expect(fs.existsSync(
            path.join(projectDir, 'register.html')
        )).toBe(true);
    });

    test('Contact page should exist', () => {
        expect(fs.existsSync(
            path.join(projectDir, 'contact.html')
        )).toBe(true);
    });

    test('Login page should exist', () => {
        expect(fs.existsSync(
            path.join(projectDir, 'login.html')
        )).toBe(true);
    });

});
