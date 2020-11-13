package test;

import java.io.IOException;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.TextNode;

public class Crawler_test {
	//도서 url : 교보문고 베스트셀러
	final static String bookUrl="http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf";
	final static String cssSelector = "div.title strong";
	final static String cssSelector1 = "ul.list_type01 li";
	public Document crawl(String url) throws IOException {
		return Jsoup.connect(url).get();
	}
	public static void main(String[] args) {
		Crawler_test crawler=new Crawler_test();
		Document doc=null;
		try {
			doc = crawler.crawl(bookUrl);
			int i=0;
			for(Element el: doc.select(cssSelector1)) {
				if(el.hasText()) {
//					System.out.println(el.html());
					String tmp=el.select("div.title strong").text();
					if(!(tmp.equals(""))) {
						String book_title=el.select("div.title strong").text();
						System.out.println(book_title);
					}
					List<TextNode> node =  el.select("div.author").textNodes();
					for (TextNode node1 : node) {
							String book_author=node1.toString().trim();
							System.out.println(book_author);
							break;
					}
					String book_link= el.select("div.cover a").attr("href");
					System.out.println(book_link);
					String book_img_src=el.select("div.cover a img").attr("src");
					System.out.println(book_img_src);
				}
			}
//			System.out.println(doc.select(cssSelector).text());
		String sample=doc.getElementsByClass("list_type01").html();
//		System.out.println(sample);
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("크롤링 실패");
		}

	}
}
