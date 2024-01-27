import { useSelector } from 'react-redux';
import { userSelect } from '../../redux/auth/selectors';

export const ProfileSettingsComponent = () => {
  const user = useSelector(userSelect);

  const email = user.loginUser.email;
  return (
    <div>
      <form>
        <input name="name" type="name" placeholder="name" />
        <input name="email" type="email" placeholder={email} readOnly />
        <input name="height" type="number" placeholder="height" />
        <input
          name="current_weight"
          type="number"
          placeholder="current_weight"
        />
        <input
          name="desired_weight"
          type="number"
          placeholder="desired_weight"
        />
        <input name="birth" type="date" placeholder="birth" />
        <fieldset>
          <legend>Blood</legend>

          <input type="radio" name="blood" id="1" />
          <label for="1">1</label>

          <input type="radio" name="blood" id="2" />
          <label for="2">2</label>
          <input type="radio" name="blood" id="3" />
          <label for="3">3</label>
          <input type="radio" name="blood" id="4" />
          <label for="4">4</label>
        </fieldset>
        <fieldset>
          <input type="radio" name="gender" id="male" />
          <label for="male">Male</label>

          <input type="radio" name="gender" id="female" />
          <label for="female">Female</label>
        </fieldset>
        <fieldset>
          <input type="radio" name="lifestyle" id="1" />
          <label for="1">
            Sedentary lifestyle (little or no physical activity)
          </label>

          <input type="radio" name="lifestyle" id="2" />
          <label for="2">
            Light activity (light exercises/sports 1-3 days per week)
          </label>
          <input type="radio" name="lifestyle" id="3" />
          <label for="3">
            Moderately active (moderate exercises/sports 3-5 days per week)
          </label>
          <input type="radio" name="lifestyle" id="4" />
          <label for="4">
            Very active (intense exercises/sports 6-7 days per week)
          </label>
          <input type="radio" name="lifestyle" id="5" />
          <label for="5">
            Extremely active (very strenuous exercises/sports and physical work)
          </label>
        </fieldset>
      </form>
    </div>
  );
};
