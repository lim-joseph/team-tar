import {joinTeam} from "../action";
export default async function JoinPopup() {
  return (
    <>
      <form action={joinTeam}>
        <input type="text" placeholder="Enter Team Code" name="teamCode" />
        <button type="submit">Join</button>
      </form>
    </>
  );
}
