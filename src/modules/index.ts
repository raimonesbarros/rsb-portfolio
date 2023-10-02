export { formatDistanceToNow } from "date-fns";
export { ptBR } from "date-fns/locale";
export {
  initializeApp as InitFirebaseApp,
  type FirebaseApp,
} from "firebase/app";
export {
  getFirestore as InitFirestore,
  doc,
  getDoc,
  type Firestore,
} from "firebase/firestore";
export {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
export {
  clearPersistedStore,
  configurePersistable,
  makePersistable,
} from "mobx-persist-store";
export {
  MobXProviderContext,
  Provider,
  enableStaticRendering,
  inject,
  observer,
} from "mobx-react";
export type { GetStaticPaths, GetStaticProps } from "next";
export { NextSeo } from "next-seo";
export { Head, Html, Main, NextScript } from "next/document";
export { default as NextImage } from "next/image";
export { default as NextLink } from "next/link";
export { useRouter } from "next/navigation";
export { useRouter as useDynamicRouter } from "next/router";
export { useEffect, useState } from "react";
export { useForm } from "react-hook-form";
export { ReactMarkdown } from "react-markdown/lib/react-markdown";
export { Link, animateScroll } from "react-scroll";
export { ServerStyleSheet, ThemeProvider, styled } from "styled-components";
