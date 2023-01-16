import React from 'react';
import LoginForm from './LoginForm'
import renderWithi18nest from "../renderWithi18next";

/**
 * Tarkistaa, voiko käyttäjä rekisteröityä sivustolle.
 *
 * @param {LoginForm} loginform - rekisteröinnin painikkeen nimi
 * @returns {LoginForm} - osa painikkeen nimesta
 * @example
 *
 * const: (['renders loginform']);
 * // => ['Käyttäjä', 'Salasana', 'Kirjaudu']
 */
test('renders loginform', () => {

    const component = renderWithi18nest(<LoginForm/>)
    const element1 = component.getByText("Käyttäjä");
    const element2 = component.getByText("Salasana"); 
    const element3 = component.getByText("Kirjaudu")
});