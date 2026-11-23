
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

describe('Campus Desk Unit Tests', () => {

    test('index.html should exist', () => {
        expect(fs.existsSync(path.join(projectDir, 'index.html'))).toBe(true);
    });

    test('contact.html should exist', () => {
        expect(fs.existsSync(path.join(projectDir, 'contact.html'))).toBe(true);
    });

    test('login.html should exist', () => {
        expect(fs.existsSync(path.join(projectDir, 'login.html'))).toBe(true);
    });

    test('register.html should exist', () => {
        expect(fs.existsSync(path.join(projectDir, 'register.html'))).toBe(true);
    });

    test('index.html should contain Student directory', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(content).toContain('Student directory');
    });

    test('index.html should contain Campus Desk', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(content).toContain('Campus Desk');
    });

    test('index.html should link to contact and register pages', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(content).toContain('contact.html');
        expect(content).toContain('register.html');
    });

});
