import Mock from "mockjs"
import test from "./test/index.js"

Mock.mock('/list','get',test.getData)