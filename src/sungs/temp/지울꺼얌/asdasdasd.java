package sungs.temp.지울꺼얌;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

public class asdasdasd {

	static String searchWord(String word) {
		StringBuffer result = new StringBuffer(".*");

		result.append(word);

		result.append(".*");

		return result.toString();
	}

	static String[] searchArr(String word) {
		String[] arr = word.split(" ");
		List<String> list = new ArrayList<String>();

		for (String string : arr) {

			StringBuffer temp = new StringBuffer(".*");

			temp.append(string);

			temp.append(".*");

			list.add(temp.toString());
		}

		return list.toArray(new String[list.size()]);
	}

	public static void main(String[] args) { // findContent

		String search = searchWord("좋은 아침 !");
		System.out.println(search);

		String[] ss = searchArr("좋은 아침 입니다. ! 모두들 안녕!");
		System.out.println(Arrays.toString(ss));

		// 파일을 담고 있는 list 로 쓸까? 그때 가서 자세한 내용을 알고 판단
		String savePath = "src/sungs/temp/지울꺼얌";
		String fileName = "asd.txt";

		String path = savePath + File.separator + fileName;

		System.out.println(path);

		File file = new File(path);

		System.out.println(file.length());

		boolean a = false;
		StringBuffer content = null;
		List<String> qwer = null;

		try {

			// 1. 쿼리문으로 반환된 파일들의 이름 들을 가진 배열이 있을 것임

			// 2. 반복문으로 계속 파일을 생성해서 스트림으로 뽑아서 검색어와 대조
			// 이부분이 문제가 심각 해질수 있음
			BufferedReader gr = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
			content = new StringBuffer();
			qwer = new ArrayList<String>();
			
			while (gr.read() != -1) {

				String aaa = gr.readLine();
				content.append(aaa);

				System.out.println(aaa);

				for (String string : ss) {
					if (Pattern.matches(string, aaa)) {
						a = true;
					}
				}

				// 3. 검색어 통과시 List에 추가
				if (a) {
					// System.out.println("파일명: " + file.getName());
					// qwer.add(file.getName());
					qwer.add(content.toString());
					a = false;
					break;
				}

				// 파일들을 담은 반목문 종료

				// 4. 뽑아낸 list => array 반복문 돌려 dto setting
				// 그냥 list 반환
			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
