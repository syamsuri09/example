import { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Form Data is : UserName = ${username}, Description = ${description} And Country = ${country} `
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <div>
          <label>Description</label>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            placeholder="Description Here"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <label>Country</label>
        <select
          name="countries"
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option>Please choose an option</option>
          <option value="india">India</option>
          <option value="usa">Usa</option>
          <option value="thailand">Thailand</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
