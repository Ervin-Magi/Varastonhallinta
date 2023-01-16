import React from 'react';
import UserForm from './UserForm'
import renderWithi18nest from "../renderWithi18next";

/**
 * Avaa 4 vaihtoehtoa tavaroiden hinnalle.
 *
 * @param {pageName} pageName - painikkeen nimi
 * @returns {pageName} - osa painikkeen nimesta
 * @example
 *
 * kahvi: (['block']);
 * // => ['Käyttäjä', 'Salasana', 'Etunimi', 'Sukunimi', 'Luo uusi']
 */
test('renders userform', () => {

    const component = renderWithi18nest(<UserForm/>)
    const element1 = component.getByText("Käyttäjä");
    const element2 = component.getByText("Salasana"); 
    const element3 = component.getByText("Etunimi");
    const element4 = component.getByText("Sukunimi");
    const element5 = component.getByText("Luo uusi")
});