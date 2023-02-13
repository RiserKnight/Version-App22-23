import styled from "styled-components/native";

export const OTPInputContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextInputHidden = styled.TextInput`
  /* width: 300px;
  border-color: black;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
  margin-top: 50px;
  color: white; */
  position: absolute;
  opacity: 0;
`;

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const SplitBoxes = styled.View`
  border-color: #4d1637;
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  min-width: 50px;
`;

export const SplitBoxText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #4d1637;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: #4d1637;
  background-color: grey;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #000000;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  margin-top: 60px;
`;

export const ButtonText = styled.Text`
  color: black;
  font-size: 20px;
`;