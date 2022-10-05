import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../components/MainLayout";
import { wrapper } from "../store";
import axios from "axios";
import {
  selectSetProfileData,
  setProfileData,
  setTodoData,
} from "../store/subjectSlice";
import { useSelector } from "react-redux";

const About = ({ user }: any) => {
  const data = useSelector(selectSetProfileData);
  let [todo] = data?.todos;

  console.log(todo?.id);

  return (
    <MainLayout>
      <div style={{border: '1px solid green', padding: '15px'}}>
        <h3>Todo data obtained using redux-toolkit and next-redux-wrapper</h3>
        <p>id: {todo?.id}</p>
        <p>userId: {todo?.userId}</p>
        <p>title: {todo?.title}</p>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      await store.dispatch(setTodoData([data]));
      await store.dispatch(setProfileData(data.title));
      return {
        props: {
          user: data,
        },
      };
    } catch (e) {
      console.log(e);
      return {
        props: {},
      };
    }
  });

export default About;
