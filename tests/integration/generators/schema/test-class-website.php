<?php
/**
 * WPSEO plugin test file.
 *
 * @package WPSEO\Tests\Generators\Schema
 */

use Yoast\WP\SEO\Context\Meta_Tags_Context;
use Yoast\WP\SEO\Generators\Schema\Website;

/**
 * OpenGraph tests.
 */
class Website_Test extends WPSEO_UnitTestCase {

	/**
	 * The Website schema generator.
	 *
	 * @var Website
	 */
	private $website;

	/**
	 * Set up the tests.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->website = $this->get_website();
	}

	/**
	 * Create the website schema generator.
	 *
	 * @return Website
	 */
	private function get_website(): Website {
		$website          = new Website();
		$website->context = \YoastSEO()->classes->get( Meta_Tags_Context::class )->of( [] );
		$website->helpers = \YoastSEO()->helpers;

		return $website;
	}

	/**
	 * Ensure the website schema generator is always needed.
	 *
	 * @covers Website::is_needed
	 */
	public function test_website_is_always_needed(): void {
		$this->assertTrue( $this->website->is_needed() );
	}

	/**
	 * Ensure the generated website schema.
	 *
	 * @covers Website::generate
	 */
	public function test_generate(): void {
		$result = $this->website->generate();

		$this->assertSame(
			[
				'@type'           => 'WebSite',
				'@id'             => 'http://example.org/#website',
				'url'             => 'http://example.org/',
				'name'            => 'Test Blog',
				'description'     => '',
				'potentialAction' => [
					[
						'@type'       => 'SearchAction',
						'target'      => [
							'@type'       => 'EntryPoint',
							'urlTemplate' => 'http://example.org/?s={search_term_string}',
						],
						'query-input' => 'required name=search_term_string',
					],
				],
				'inLanguage'      => 'en-US',
			],
			$result
		);
	}

	/**
	 * Ensure the generated website schema.
	 *
	 * @covers Website::generate
	 */
	public function test_generate_allows_disabling_search_action(): void {
		add_filter( 'disable_wpseo_json_ld_search', '__return_true' );

		$result = $this->website->generate();

		$this->assertSame(
			[
				'@type'       => 'WebSite',
				'@id'         => 'http://example.org/#website',
				'url'         => 'http://example.org/',
				'name'        => 'Test Blog',
				'description' => '',
				'inLanguage'  => 'en-US',
			],
			$result
		);
	}

	/**
	 * Ensure the generated website schema.
	 *
	 * @covers Website::generate
	 */
	public function test_generate_allows_changing_search_url(): void {
		add_filter(
			'wpseo_json_ld_search_url',
			function ( string $url ) {
				return 'http://example.org/search-results?s={search_term_string}';
			}
		);

		$result = $this->website->generate();

		$this->assertSame(
			[
				'@type'           => 'WebSite',
				'@id'             => 'http://example.org/#website',
				'url'             => 'http://example.org/',
				'name'            => 'Test Blog',
				'description'     => '',
				'potentialAction' => [
					[
						'@type'       => 'SearchAction',
						'target'      => [
							'@type'       => 'EntryPoint',
							'urlTemplate' => 'http://example.org/search-results?s={search_term_string}',
						],
						'query-input' => 'required name=search_term_string',
					],
				],
				'inLanguage'      => 'en-US',
			],
			$result
		);
	}
}
